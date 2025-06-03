function AppFooter() {
  return (
    <footer className="app-footer bg-light text-center py-3 mt-auto footer">
      <small>
        &copy; {new Date().getFullYear()} Contacts List App &mdash; Built with
        React & Bootstrap
      </small>
    </footer>
  );
}

export default AppFooter;
