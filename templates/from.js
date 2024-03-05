document.addEventListener("DOMContentLoaded", () => {
  console.log("sdaasdasd");
  const papi = document.getElementById("papi");
  const template = document.getElementById("#form-input");

  const json = [
    {
      path: [
        "m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 0 0-18 0a8.905 8.905 0 0 0 1.813 5.395",
        "M21 18h-2v-8h-6v8h-2v-8a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2Z",
        "M15 16h2v2h-2zm0-4h2v2h-2z",
      ],
      placeholder: "Nombre de la Empresa",
      id: "nombre_empresa",
    },
  ];

  json.forEach((data) => {
    console.log(data);
    const element = template.cloneNode(true);
    const label = template.querySelector("label");
    label.for = data.id;

    const svg = template.querySelector("svg");
    data.path.forEach((d) => {
      const path = document.createElement("path");
      path.d = d;
      svg.appendChild(path);
    });

    const input = template.querySelector("input");
    input.placeholder = data.placeholder;
    input.id = data.id;
    input.name = data.id;

    papi.appendChild(element);
  });
});
