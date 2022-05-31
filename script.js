const dataRow = document.getElementById("table");
// final Data
const finalData = fetch("https://jsonplaceholder.typicode.com/photos")
  .then((data) => {
    return data.json();
  })
  .catch((err) => {
    console.log(err);
  });

finalData.then((data) => {
  data.forEach((singleData) => {
    //   create table row
    const row = document.createElement("tr");
    //   create td element
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    //  put value dynamically into td
    td1.innerHTML = `${singleData.id}`;
    td2.innerHTML = `${singleData.albumId}`;
    td3.innerHTML = `${singleData.title}`;
    td4.innerHTML = `${singleData.url}`;
    td5.innerHTML = `${singleData.thumbnailUrl}`;
    console.log(td1);
    // append all td into dataRow
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    dataRow.appendChild(row);
  });
});
