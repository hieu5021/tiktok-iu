import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1141428531ea926e44987fe3578f5eb0~c5_100x100.jpeg?x-expires=1660406400&x-signature=blbjhRGeHvm3xDvtD9oiSiTbGAQ%3D"
        className={cx("avt")}
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyễn Văn An</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyajjj</span>
      </div>
    </div>
  );
}

export default AccountItem;
