import styles from "./Navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={styles["navbar-wrapper"]}>
      <div className={styles.toolbar}>
        <button type="button">File</button>
        <button type="button">Edit</button>
        <button type="button">View</button>
        <button type="button">Favorites</button>
        <button type="button">Tools</button>
        <button type="button">Help</button>
      </div>
      <div className={styles["icon-toolbar-wrapper"]}>
        <div className={styles.divider}>
          <div />
          <div />
        </div>
        <div className={styles["icon-toolbar"]}>
          <button type="button">
            <Image
              src="/icons/add-icon.svg"
              width="48"
              height="48"
              alt="Add Icon"
            />
            <span>Add</span>
          </button>
          <button type="button">
            <Image
              src="/icons/extract-icon.svg"
              width="48"
              height="48"
              alt="Extract Icon"
            />
            <span>Extract</span>
          </button>
          <button type="button">
            <Image
              src="/icons/test-icon.svg"
              width="48"
              height="48"
              alt="Test Icon"
            />
            <span>Test</span>
          </button>
          <button type="button">
            <Image
              src="/icons/copy-icon.svg"
              width="48"
              height="48"
              alt="Copy Icon"
            />
            <span>Copy</span>
          </button>
          <button type="button">
            <Image
              src="/icons/move-icon.svg"
              width="48"
              height="48"
              alt="Move Icon"
            />
            <span>Move</span>
          </button>
          <button type="button">
            <Image
              src="/icons/delete-icon.svg"
              width="48"
              height="48"
              alt="Delete Icon"
            />
            <span>Delete</span>
          </button>
          <button type="button">
            <Image
              src="/icons/info-icon.svg"
              width="48"
              height="48"
              alt="Info Icon"
            />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
