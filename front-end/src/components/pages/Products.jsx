import * as React from 'react';

function Products() {
  return (
    <div id="products-page">
      {/* Header */}
      <header>
        <nav id="header-nav" />
      </header>

      {/* Sidebar */}
      <aside>
        <section />
      </aside>

      {/* Main */}
      <main>
        <section>
          <article>
            <h2>1</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </article>

          <article>
            <h2>2</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <nav id="footer-nav" />
      </footer>
    </div>
  );
}

export default Products;
