import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import { Input } from "antd";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const createBlog = () => {
    const editorRef: any = useRef();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isLoad, setIsLoad] = useState(true);
    const { CKEditor, ClassicEditor } = editorRef.current || {};
    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
        setIsLoad(false);
    });
    function create() {
        const data = { title, content };
        console.log(data);
    }
    return (
        <div>
            <Header />
            <div className="w-full max-w-screen-xl mx-auto py-10">
                <h1 className="text-center text-xl py-5">Tạo blog mới</h1>
                <div className="flex w-full py-5">
                    <label className="whitespace-nowrap flex items-center mr-8 text-2xl font-semibold">
                        Tiêu đề:{" "}
                    </label>
                    <Input
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Tiêu đề"
                    />
                </div>
                <label className="text-xl font-semibold">Nội dung</label>

                {isLoad ? (
                    <></>
                ) : (
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        // config={{
                        //     ckfinder: {
                        //         uploadUrl: `${process.env.REACT_APP_BASE_URL_IMG}/api/image`,
                        //     },
                        // }}
                        onChange={(event: any, editor: any) => {
                            const data = editor.getData();
                            setContent(data);
                        }}
                    />
                )}
                <div className="flex w-full justify-end">
                    <button
                        className="border-solid border rounded-sm px-7 py-3 mt-5"
                        onClick={create}
                    >
                        Tạo mới
                    </button>
                </div>
            </div>
        </div>
    );
};
export default createBlog;
