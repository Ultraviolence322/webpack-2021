async function pr() {
  return await Promise.resolve('hi by');
}

pr().then((e) => console.log(e));
