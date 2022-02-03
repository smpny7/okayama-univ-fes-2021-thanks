import Header from './Header'
import studentIcon from '../assets/img/students.jpg'

function Content() {
    return (
        <div>
            <Header />
            <div className="mt-16 text-center md:mt-28">
                <h1 className="text-3xl font-medium leading-normal tracking-wider text-primary">
                    岡山大学祭2021は
                    <br className="md:hidden" />
                    終了しました
                </h1>
                <img
                    src={studentIcon}
                    className="mt-16 inline w-44"
                    alt="学生"
                />
                <p className="mt-10 font-medium text-gray-400">
                    たくさんのご来場ありがとうございました
                </p>
            </div>
        </div>
    )
}

export default Content
