export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400">Contact Us</h2>
        <p className="text-lg mb-6 text-gray-300">
          Have questions or want to place an order? We’d love to hear from you.
        </p>
        <div className="space-y-4 text-lg">
          <p>Email: <a href="mailto:info@sunnyhocha.com" className="text-yellow-400">info@sunnyhocha.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-yellow-400">+1 (234) 567-890</a></p>
        </div>
      </div>
    </section>
  );
}
