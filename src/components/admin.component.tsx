const Admin = () => {
  const verifyRandomGameEligibility = () => {
    // this.tavisService?.verifyRandomGameEligibility().subscribe((data) => {
    //   this.dialog.open(RandomGamesDialog, {
    //     data: data,
    //     height: "80%",
    //     width: "50%",
    //   });
    // });
  };

  const produceBcmReport = () => {
    // this.tavisService?.produceBcmReport().subscribe((data) => {
    //   console.log(data);
    // });
  };

  const produceStatReport = () => {
    // this.tavisService?.produceStatReport().subscribe((data) => {
    //   console.log(data);
    // });
  };

  const produceCompletedGamesReport = () => {
    // this.tavisService?.produceCompletedGamesReport().subscribe((data) => {
    //   console.log(data);
    // });
  };

  const recalcBcmLeaderboard = () => {
    // this.tavisService?.recalcBcmLeaderboard().subscribe((data) => {
    //   console.log(data);
    // });
  };
  return (
    <>
      <button type="button" onClick={verifyRandomGameEligibility}>
        Generate Random Games
      </button>
      <br />
      <button type="button" onClick={produceStatReport}>
        Produce Stat Report
      </button>
      <br />
      <button type="button" onClick={produceBcmReport}>
        Produce BCM Report
      </button>
      <br />
      <button type="button" onClick={produceCompletedGamesReport}>
        Produce Completed Games Report
      </button>
      <br />
      <button type="button" onClick={recalcBcmLeaderboard}>
        Recalc Bcm Leaderboard
      </button>
      <br />
    </>
  );
};
