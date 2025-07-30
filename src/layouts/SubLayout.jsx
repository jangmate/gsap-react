// layouts/MainLayout.tsx
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {Outlet} from "react-router-dom";

export default function SubLayout() {
    return (
        <>
            <Header />
            <p>여긴 서브레이아웃입니다 ㅋ 라우트 테스트용</p>
            <Outlet />
            <Footer />
        </>
    );
}