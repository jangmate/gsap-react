// layouts/MainLayout.tsx
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <Header />
            <p>여긴 메인레이아웃입니다 ㅋ</p>
            <Outlet />
            <Footer />
        </>
    );
}