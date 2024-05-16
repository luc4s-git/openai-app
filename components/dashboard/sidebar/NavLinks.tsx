import Link from 'next/link';

export default function NavLinks() {
  return (
    <ul className="menu rounded-box text-lg">
      <li>
        <Link href={'/chat'}>Chat</Link>
      </li>
      <li>
        <Link href={'/tours'}>Tours</Link>
      </li>
      <li>
        <Link href={'/tours'}>New Tour</Link>
      </li>
      <li>
        <Link href={'/profile'}>Profile</Link>
      </li>
    </ul>
  );
}
