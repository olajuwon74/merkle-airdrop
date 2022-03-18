


  const trans = await ethers.getContractAt("BRT", "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");
  console.log(await trans.balanceOf(claimer));
  await trans.connect(claimer).transfer("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9", "10000000000");
  const balclaim = await trans.balanceOf(claimer);
  const balmerk = await trans.balanceOf("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");

  console.log(balclaim);
  console.log(balmerk);
  