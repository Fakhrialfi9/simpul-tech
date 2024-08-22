import inputmessageStyle from "../../assets/style/components/inputmessage.module.css";
const inputMessage = () => {
  return (
    <footer className={inputmessageStyle.footer}>
      <form>
        <input type='text' name='chatmessage' placeholder='Type a new message'></input>
        <button>Send</button>
      </form>
    </footer>
  );
};

export default inputMessage;
