function Error() {
    return (
        <div className="error">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16" >
                <path d="M10 10 L90 10 L50 90 Z"/>
            </svg>
            <h1>Error</h1>
            <p>Connection not executed. Try again</p>
        </div>
    );
}

export default Error;