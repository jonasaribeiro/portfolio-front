import Image from "next/image";

const ContactPage = () => {
  return (
    <section>
      <div />
      <div>
        <h2>Contato</h2>
        <button>Baixar Currículo</button>
      </div>
      <div>
        <div>
          <div>
            <h4>Tel: +55 (32) 98488-1601</h4>
            <h4>Email: jonasafribeiro@gmail.com</h4>
          </div>
          <div>
            <Image
              src="/imgs/github_icon.svg"
              alt="Github"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/linkedin_logo_icon.svg"
              alt="Linkedin"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/gmail_icon.svg"
              alt="Email"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/whatsapp_icon.svg"
              alt="Whatsapp"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/instagram_logo_icon.svg"
              alt="Instagram"
              width={50}
              height={50}
            />
            <Image
              src="/imgs/discord_logo_icon.svg"
              alt="Discord"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div>
          <h3>Deixe uma mensagem</h3>
          <form action="">
            <input type="text" name="" id="" />
            <input type="email" name="" id="" />
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
