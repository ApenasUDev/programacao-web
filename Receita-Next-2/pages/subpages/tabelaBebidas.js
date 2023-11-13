import React from 'react';
function bebidas(props) {
    return (
        <div>
            <table  border="1">
                <thead>
                    <tr>
                        <th>nome</th>
                        <th>alcool</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.nome}</td>
                        <td>{props.alcool}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default bebidas