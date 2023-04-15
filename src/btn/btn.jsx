import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Btn = () => {
    return (
        <div style={{display: 'flex', justifyContent: "center", alignItems: "center", width: '100%', height: '500px'}}>
            <button type="button" class="btn btn-primary btn-lg">Первая</button>
            <button type="button" class="btn btn-danger">Вторая</button>
        </div>
    );
}

export default Btn;
