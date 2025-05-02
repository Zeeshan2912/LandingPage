import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Klimb App</p>
    </footer>
  );
};

export default Footer;