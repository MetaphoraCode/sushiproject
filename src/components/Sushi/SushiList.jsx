import { useState, useEffect } from "react";
import SushiCard from "./SushiCard";
import Loading from "../Loading";
import Error from "../Error";

function SushiList() {
    const [sushi, setSushi] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchSushi() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://662ba868de35f91de1590d34.mockapi.io/sushi"
                );
                const data = await res.json();
                setSushi(data);
            } catch(e) {
                setIsError(true);
            } finally { 
                setIsLoading(false); 
            }
        }
        
        fetchSushi();
    }, []);

    return (
        <section className="sushi">
            <div className="container">
                <h1 className="title">Выберите вид суши</h1>
                <div className="sushi-row">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        sushi.map((sushi) => <SushiCard sushi={sushi} key={sushi.id} />)
                    )}
                    {isError && <Error />}
                </div> 
            </div>
        </section>
    );
}

export default SushiList;
