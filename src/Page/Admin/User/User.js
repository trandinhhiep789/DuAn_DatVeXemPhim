import React from 'react'

export const Film = ({ posts, loading }) => {

    if (loading) {
        return <h2>loading...</h2>
    }

    return (
        //cách viết 2
        <>

            {posts.map(post => (

                <tr>
                    <td scope="row">{post.taiKhoan}</td>
                    <td>{post.matKhau}</td>
                    <td>{post.email}</td>
                    <td>{post.soDt}</td>
                    <td>{post.maLoaiNguoiDung}</td>

                    <td className="d-flex justify-content-center">
                        <button className="btn btn-outline-success">Ghi danh</button>
                        <button className="btn mx-3 btn-outline-info">sửa</button>
                        <button className="btn btn-outline-danger">X</button>
                    </td>
                </tr>

            ))
            }

        </>
    )
}

export default Film

