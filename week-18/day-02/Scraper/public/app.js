$(document).ready(() => {
  $.getJSON("/all").then((response) => {
    console.log(response);
    response.forEach((value, index) => {
      const template = 
      `
      <tr>
        <td>${value.title}</td>
        <td>${value.link}</td>
      </tr>
      `;
      $("#posts").append($(template));
    });
  });
});