import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";
// import { clearUser } from "../../../store/actions/userAction";
import { Dropdown } from "antd";
// import { AppState } from "../../../interface/redux";
import Link from "next/link";
import { PROFILE } from "../config/constRouter";
// import VIImg from "../../../img/vi.png";
// import ENImg from "../../../img/en.png";
// import { auth } from "../../../firebase/config";

const Header = () => {
    const VIImg = "/img/vi.png";
    const ENImg = "/img/en.png";
    // const dispatch = useDispatch();
    // const user = useSelector((state: AppState) => state.userState.user);
    const { t, i18n } = useTranslation();

    function onLangChange() {
        let lg = "";
        if (i18n.language === "vi") {
            lg = "en";
        } else {
            lg = "vi";
        }
        i18n.changeLanguage(lg);
    }
    // function logout() {
    //     dispatch(clearUser());
    //     auth.signOut();
    //     // localStorage.removeItem("user");
    // }
    const menu = (
        <div>
            <div>
                <Link href={PROFILE}>Profile</Link>
            </div>
            {/* <div onClick={logout}>{t("Logout")}</div> */}
        </div>
    );
    const list = [
        {
            name: "Swap",
            url: "#",
        },
        {
            name: "Wallet",
            url: "#",
        },
        {
            name: "Launch Pad",
            url: "#",
        },
        {
            name: "Marketplace",
            url: "#",
        },
    ];
    return (
        <div className="w-full h-24 header">
            <div className="max-w-screen-xl w-full flex h-full items-center justify-between mx-auto">
                <div className="flex ">
                    {list.map((l: any, i: number) => (
                        <Link href={l.url} key={i}>
                            <a className="mx-5 text-lg font-bold">{l.name}</a>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center cursor-pointer">
                    <div
                        className="flex items-center mr-5"
                        onClick={onLangChange}
                    >
                        <img
                            className="img-language"
                            width="24px"
                            alt="language"
                            src={i18n.language === "vi" ? VIImg : ENImg}
                        />
                        {t("L")}
                    </div>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <div className="btn-header">User</div>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};
export default Header;
