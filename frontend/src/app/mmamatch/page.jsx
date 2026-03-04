"use client";

import Header from "../Components/Header";
import Footer from "../Components/Footer"
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
      fetch("http://localhost:3001/matches/mmaMatches")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));

    fetch("http://localhost:3001/players/oddsMma")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  if (!data || !stats) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <h1>MMA Match</h1>
      <div className="matches-class">
        <p>Message: {data.message}</p>
        <p>Status: {data.status}</p>
      </div>

      <h2>Mock Stats</h2>
      <div className="matches-class">
        <p>Message: {stats.message}</p>
        <p>headshot: {stats.headShot}</p>
        <p>bodyshot: {stats.bodyShot}</p>
        <p>dodges: {stats.dodges}</p>
        <p>takedowns: {stats.takedowns}</p>
        <p><strong>pWin:</strong> {stats.pWin}%</p>
      </div>
      <Footer />
    </>
  );

}
