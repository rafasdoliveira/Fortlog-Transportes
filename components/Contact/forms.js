import styles from "./forms.module.css";

export default function Form({label, type, labelfor}) {
  return (
    <div class={styles.inputGroup}>
      <div>
        <label for={labelfor}>{label}</label>
      </div>
      <input type={type} autocomplete="off" required="" />
    </div>
  );
}
