(function () {
  const C = CONFIG, $ = (s) => document.querySelector(s);
  const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const peso = (n) => "$ " + Number(n).toLocaleString("es-AR", { maximumFractionDigits: 0 });
  const wa = (txt) => `https://wa.me/${C.contacto.whatsapp}?text=${encodeURIComponent(txt)}`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Textos y enlaces de contacto
  $("#lead").textContent = C.negocio.descripcion;
  ["#cta-hero", "#cta-ubi", "#wa-float"].forEach((s) => ($(s).href = wa(C.contacto.mensajeWhatsapp)));
  $("#dir").textContent = C.contacto.direccion;
  $("#mapa").src = C.contacto.mapsEmbed;
  $("#como-llegar").href = C.contacto.mapsLink;
  $("#anio").textContent = new Date().getFullYear();

  // Menú celular
  const burger = $("#burger"), nav = $("#nav");
  burger.onclick = () => {
    const o = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", o);
  };
  nav.onclick = (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", false); } };

  // Hora de Argentina
  function ahoraAR() {
    const p = new Intl.DateTimeFormat("en-GB", { timeZone: "America/Argentina/Buenos_Aires", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date());
    const g = (t) => p.find((x) => x.type === t).value;
    const dia = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(g("weekday"));
    return { dia, min: (+g("hour") % 24) * 60 + +g("minute") };
  }
  const aMin = (h) => { const [a, b] = h.split(":").map(Number); return a * 60 + b; };

  function abiertoAhora() {
    const { dia, min } = ahoraAR();
    return (C.horarios[dia] || []).some(([a, c]) => min >= aMin(a) && min < aMin(c));
  }
  const b = $("#abierto");
  const ab = abiertoAhora();
  b.textContent = ab ? "Abierto ahora" : "Cerrado ahora · escribinos igual y te respondemos";
  b.classList.add(ab ? "on" : "off");

  // Horarios
  const hoy = ahoraAR().dia;
  $("#horarios").innerHTML = [1, 2, 3, 4, 5, 6, 0].map((d) => {
    const t = C.horarios[d];
    const txt = t.length ? t.map(([a, c]) => `${a.replace(/^0/, "")} a ${c} hs`).join(" y ") : "Cerrado";
    return `<tr class="${d === hoy ? "hoy" : ""}"><td>${DIAS[d]}</td><td>${txt}</td></tr>`;
  }).join("");

  // Catálogo
  let cat = "Todos";
  const cats = ["Todos", ...C.categorias];
  const chips = $("#chips");
  function pintarChips() {
    chips.innerHTML = cats.map((c) => `<button class="chip" type="button" aria-pressed="${c === cat}">${esc(c)}</button>`).join("");
  }
  chips.onclick = (e) => { if (e.target.classList.contains("chip")) { cat = e.target.textContent; pintarChips(); pintarGrid(); } };

  const msgProd = (p) => `¡Hola! Vi su web y quería consultar por: ${p.nombre}. ¿Me pasan precio y tiempos?`;

  function pintarGrid() {
    $("#grid").innerHTML = C.productos.filter((p) => cat === "Todos" || p.categoria === cat).map((p) => `
      <article class="card">
        <button class="card__img" type="button" data-id="${p.id}" aria-label="Ver ${esc(p.nombre)} más grande">
          <img src="${p.foto}" alt="${esc(p.nombre)}" width="${p.w}" height="${p.h}" loading="lazy">
        </button>
        <div class="card__body">
          <h3>${esc(p.nombre)}</h3>
          <p>${esc(p.descripcion)}</p>
          ${p.precio ? `<span class="precio">${peso(p.precio)}</span>` : ""}
          <a class="btn btn--wa" href="${wa(msgProd(p))}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
        </div>
      </article>`).join("");
  }
  pintarChips(); pintarGrid();

  // Lightbox nativo
  const lb = $("#lightbox");
  $("#grid").onclick = (e) => {
    const btn = e.target.closest(".card__img");
    if (!btn) return;
    const p = C.productos.find((x) => x.id === btn.dataset.id);
    $("#lb-img").src = p.foto; $("#lb-img").alt = p.nombre;
    $("#lb-cap").textContent = p.nombre;
    $("#lb-wa").href = wa(msgProd(p));
    lb.showModal();
  };
  lb.onclick = (e) => { if (e.target === lb) lb.close(); };

  // Medidas
  $("#medidas-lista").innerHTML = C.medidasLinea.map((m) => `
    <div class="med"><h3>${esc(m.nombre)}</h3><p class="m">${esc(m.medidas)}</p><p>${esc(m.detalle)}</p>
    <p class="precio">${m.precio ? peso(m.precio) : "Consultá el precio"}</p></div>`).join("");

  // Pasos
  $("#pasos").innerHTML = C.pasos.map((p) => `<li><strong>${esc(p.titulo)}</strong>${esc(p.texto)}</li>`).join("");

  // Reseñas (solo si hay)
  if (C.resenas.length) {
    $("#resenas").hidden = false;
    $("#resenas-lista").innerHTML = C.resenas.map((r) => `<div class="res"><p class="st" aria-label="${r.estrellas} estrellas">${"★".repeat(r.estrellas)}</p><p>${esc(r.texto)}</p><p><strong>${esc(r.autor)}</strong></p></div>`).join("");
  }

  // Formulario → WhatsApp
  const sel = $("#sel-mueble");
  sel.innerHTML = '<option value="">Elegí una opción</option>' +
    ["Placard", "Rack de TV", "Mesa de luz", "Otro mueble a medida"].map((o) => `<option>${o}</option>`).join("");
  $("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target, v = (n) => f.elements[n].value.trim();
    let ok = true;
    ["nombre", "localidad", "mueble"].forEach((n) => { const bad = !v(n); f.elements[n].classList.toggle("err", bad); if (bad) ok = false; });
    if (!ok) return;
    const lineas = ["¡Hola! Quiero pedir un presupuesto:", `• Mueble: ${v("mueble")}`];
    if (v("medidas")) lineas.push(`• Medidas: ${v("medidas")}`);
    if (v("mensaje")) lineas.push(`• Detalle: ${v("mensaje")}`);
    lineas.push(`Nombre: ${v("nombre")}`, `Localidad: ${v("localidad")}`);
    window.open(wa(lineas.join("\n")), "_blank", "noopener");
  });

  // Footer
  const links = [`<li><a href="tel:${C.contacto.telefono.replace(/[^+\d]/g, "")}">${C.contacto.telefono}</a></li>`,
    `<li><a href="mailto:${C.contacto.email}">${C.contacto.email}</a></li>`];
  if (C.contacto.instagram) links.push(`<li><a href="${C.contacto.instagram}" target="_blank" rel="noopener">Instagram</a></li>`);
  $("#foot-links").innerHTML = links.join("");

  // SEO: JSON-LD
  const dias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const ld = {
    "@context": "https://schema.org", "@type": "FurnitureStore",
    name: C.negocio.nombre, description: C.seo.descripcion, telephone: C.contacto.telefono, email: C.contacto.email,
    image: new URL("img/og.jpg", location.href).href,
    address: { "@type": "PostalAddress", streetAddress: "La Rioja 5015", addressLocality: "Quilmes Oeste", addressRegion: "Buenos Aires", addressCountry: "AR" },
    openingHoursSpecification: Object.entries(C.horarios).filter(([, t]) => t.length).map(([d, t]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: dias[d], opens: t[0][0], closes: t[0][1] })),
  };
  if (C.seo.url) ld.url = C.seo.url;
  if (C.contacto.instagram) ld.sameAs = [C.contacto.instagram];
  $("#ld").textContent = JSON.stringify(ld);
})();
