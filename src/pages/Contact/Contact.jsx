

const Contact = () => {
  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contacts</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
        <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d675246.7076566163!2d1.9570573582031102!3d48.679359299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e1c403a68c17%3A0x10b82c3688b9460!2s%C3%8Ele-de-France!5e0!3m2!1sfr!2sfr!4v1705743647759!5m2!1sfr!2sfr"
 width="400" 
 height="300"
 loading="lazy"
 title="Google Map Île-de-France">
</iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Prise de contact</h3>

        <form action="#" className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Nom complet" required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Address mail" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Au plaisir de vous lire" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Je vous attends </span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
