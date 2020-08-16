import React from "react";
import List from "./List";

const Overview = () => {
  return (
    <section id="overview">
      <div className="overview-header">
        <div className="overview-results">Podcasts from Germany</div>
      </div>
      <List
        searchInput={"DE"}
        // type={"show"}
      />
    </section>
  );
};

export default Overview;
