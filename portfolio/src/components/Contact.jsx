function Contact() {
  return (
      <div className="contact-form">
          <div className="illustration">
              <img src="https://storage.googleapis.com/a1aa/image/LSxqzMg8VDJKCh41nexHUCZPglKeZRfpbbwjiWU2aAyO6QbnA.jpg" alt="Illustration of a woman with a headset, working on a laptop, surrounded by various icons representing communication and support." />
          </div>
          <h1>Contact me</h1>
          <form>
              <input className="form-control name" type="text" placeholder="Name" />
              <input className="form-control email" type="email" placeholder="Email" />
              <textarea className="form-control message" rows="5" placeholder="Message"></textarea>
              <button className="btn-send" type="submit">Send</button>
          </form>
      </div>
  );
}
