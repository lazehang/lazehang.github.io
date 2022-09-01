import * as React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
    return (
        <nav className="pb-5">
            <Link to={'/'}>
                <img
                    src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                    height={40}
                    width={40}
                    alt="Hi"
                />
            </Link>
        </nav>
    )
}
