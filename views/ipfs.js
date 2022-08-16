async function add() {
  const node = await IPFS.create();
  console.log(node);
}

add();
