function calculateArea() {
  const luas = parseFloat(document.getElementById("luas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (!isNaN(luas) && !isNaN(tinggi)) {
    const area = 0.5 * luas * tinggi;
    document.getElementById("resultArea").innerHTML = `Luas Segitiga ${area}`;
  } else {
    document.getElementById("resultArea").innerHTML = "Invalid input!";
  }
}

function resetArea() {
  document.getElementById("luas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("resultArea").innerText = "";
}

function calculatePerimeter() {
  const sisiA = parseFloat(document.getElementById("sisiA").value);
  const sisiB = parseFloat(document.getElementById("sisiB").value);
  const sisiC = parseFloat(document.getElementById("sisiC").value);

  if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
    const perimeter = sisiA + sisiB + sisiC;
    document.getElementById(
      "resultPerimeter"
    ).innerHTML = `Keliling Segitiga ${perimeter}`;
  } else {
    document.getElementById("resultPerimeter").innerHTML = "Invalid input!";
  }
}

function resetPerimeter() {
  document.getElementById("sisiA").value = "";
  document.getElementById("sisiB").value = "";
  document.getElementById("sisiC").value = "";
  document.getElementById("resultPerimeter").innerText = "";
}
