import React, {useState} from 'react'
import { evaluate } from 'mathjs';

import './Calculater.css'


function Calculater(){

    const [value, setValue] = useState('');

    return (
        <div className="Cal-Conatainer">
            <div className="Calculater">
                <h1>Calculater</h1>
                <form action="">
                    <div className="display-value">
                        <input type="text" value={value}/>
                    </div>
                    <div className="btn">
                    <div>
                        <input type="button" style={styles.upperBtn} value="AC" onClick={e => setValue('')} />
                        <input type="button" style={styles.upperBtn} value="DE" onClick={e => setValue(value.slice(0, -1))} />
                        <input type="button" style={styles.upperBtn} value="%"  onClick={e => setValue(value +e.target.value)}/>
                        <input type="button" style={styles.sideBtn} value="/" onClick={e => setValue(value + e.target.value)}/>
                    </div>

                    <div>
                        <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
                        <input type="button" value="8" onClick={e => setValue(value +e.target.value)}/>
                        <input type="button" value="9" onClick={e => setValue(value +e.target.value)}/>
                        <input type="button" style={styles.sideBtn} value="*"  onClick={e => setValue(value +e.target.value)}/>
                    </div>

                    <div>
                        <input type="button" value="4" onClick={e => setValue(value +e.target.value)} />
                        <input type="button" value="5" onClick={e => setValue(value +e.target.value)} />
                        <input type="button" value="6" onClick={e => setValue(value +e.target.value)} />
                        <input type="button" style={styles.sideBtn} value="-"  onClick={e => setValue(value +e.target.value)} />
                    </div>


                    <div>
                        <input type="button" value="1" onClick={e => setValue(value +e.target.value)} />
                        <input type="button" value="2" onClick={e => setValue(value +e.target.value)} />
                        <input type="button" value="3" onClick={e => setValue(value +e.target.value)} />
                        <input type="button" style={styles.sideBtn} value="+"  onClick={e => setValue(value +e.target.value)} />
                    </div>

                    <div>
                        <input type="button" value="." onClick={e => setValue(value +e.target.value)} />
                        <input type="button" value="0" onClick={e => setValue(value +e.target.value)} />
                        <input type="button" value="00" onClick={e => setValue(value +e.target.value)} />
                        <input type="button" style={styles.sideBtn} value="=" onClick={e => setValue(evaluate(value))}/>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

const styles = {
    sideBtn: {
        background: '#55b4cbb3'
    },
    upperBtn: {
        background: '#bb5d5db3'
    }
}

export default Calculater;