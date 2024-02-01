import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/en">
        <a>Home (EN)</a>
      </Link>
    </div>
  );
};

export default Header;
