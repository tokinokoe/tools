function primefact(n) {
  let n2 = BigInt(n),
    i = 2n,
    result = [];
  while (n2 !== 1n && i ** 2n < BigInt(n)) {
    if (n2 % i === 0n) {
      result.push(i);
      n2 = n2 / i;
    } else {
      if (i === 2n) i++;
      else i += 2n;
    }
  }
  if (n2 !== 1n) result.push(n2);
  return result;
}

function writeresult() {
  const n = Number(document.getElementById("num").value);
  if (n > 1 && n === Math.floor(n)) {
    const result = primefact(BigInt(n)).join("×");
    document.getElementById("result").innerHTML = result;
  } else {
    document.getElementById("result").innerHTML =
      "2以上の自然数を入力してください";
  }
}

document.getElementById("submit").addEventListener("click", writeresult);
document.getElementById("num").addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Enter") {
    writeresult();
  }
});
