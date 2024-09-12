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
  const n = BigInt(document.getElementById("num").value),
    result = primefact(n).join("×");
  document.getElementById("result").innerHTML = result;
}

document.getElementById("submit").addEventListener("click", writeresult);
document.getElementById("num").addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Enter") {
    writeresult();
  }
});
