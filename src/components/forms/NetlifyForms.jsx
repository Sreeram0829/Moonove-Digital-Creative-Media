export default function NetlifyForms() {
  const common = <>
    <input type="hidden" name="form-name" value="" />
    <input type="hidden" name="bot-field" value="" />
  </>;
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
      {["moonlit-contact","ck-drama-contact","learnove-contact"].map(name => (
        <form key={name} name={name} data-netlify="true" netlify-honeypot="bot-field" method="POST">
          <input type="hidden" name="form-name" value={name} />
          <input name="bot-field" />
          <input name="name" /><input name="email" /><input name="brand" /><input name="subject" /><textarea name="message" />
        </form>
      ))}
    </div>
  );
}
