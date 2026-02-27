import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <Link href="/" className="link-buttons">Home</Link>
        <Link href="/poolboard" className="link-buttons">Pool Leaderboard</Link>
        <Link href="/mmaboard" className="link-buttons">MMA Leaderboard</Link>
        <Link href="/poolform" className="link-buttons">Pool Form</Link>
        <Link href="/mmaform" className="link-buttons">MMA Form</Link>
        <Link href="/poolmatch" className="link-buttons">Pool Match</Link>
        <Link href="/mmamatch" className="link-buttons">MMA Match</Link>
      </nav>
    </div>
  );
}
