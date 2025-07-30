import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className={''}>
                <p>This is Homepage</p>
                <nav className={'nav'}>
                    <ul className={'nav__list'}>
                        <li className={'nav-item'}><Link to={'/gsap'}>쥐삽 예제</Link></li>
                        <li className={'nav-item'}>작업중</li>
                        <li className={'nav-item'}>작업중</li>
                    </ul>
                </nav>
            </div>
        </>
    )
}