function MainApp({ half, children }) {
    return (
        <main class="min-vh-100 d-flex flex-column">
            <div class="row g-0 flex-grow-1">
                {half ?
                    <>
                        <div class="col-6 bg-leaf">
                        </div>
                        <div class="col-6 bg-body-tertiary">
                            <div class="p-5">
                                {children}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div class="col-12 bg-body-tertiary">
                            {children}
                        </div>
                    </>
                }
            </div>
        </main>
    );
}

export default MainApp;