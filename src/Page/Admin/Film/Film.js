// import React from 'react'

// export default function Film(posts, loading) {

//     if (loading) {
//         return <h2>loading...</h2>
//     }

//     // cách viết 1
//     // const renderPhim = () => {
//     //     return <>
//     //         {posts.map((post, i) => {
//     //             <tr key={i}>
//     //                 <td scope="row">{post.maPhim}</td>
//     //                 <td>{post.tenPhim}</td>
//     //                 <td><img src={post.hinhAnh} /></td>
//     //                 <td>{post.moTa}</td>
//     //                 <td>{post.maNhom}</td>
//     //                 <td>{post.ngayKhoiChieu}</td>
//     //                 <td className="d-flex text-center justify-content-center">
//     //                     <button className="btn mx-3 btn-outline-success">them</button>
//     //                     <button className="btn mx-3 btn-outline-info">sửa</button>
//     //                     <button className="btn mx-3 btn-outline-danger">xóa</button>
//     //                 </td>
//     //             </tr>
//     //         })}
//     //     </>
//     // }

//     return (
//         //cách viết 2
//         <>
//             {posts.map((post, i) => {
//                 <tr key={i}>
//                     <td scope="row">{post.maPhim}</td>
//                     <td>{post.tenPhim}</td>
//                     <td><img src={post.hinhAnh} /></td>
//                     <td>{post.moTa}</td>
//                     <td>{post.maNhom}</td>
//                     <td>{post.ngayKhoiChieu}</td>
//                     <td className="d-flex text-center justify-content-center">
//                         <button className="btn mx-3 btn-outline-success">them</button>
//                         <button className="btn mx-3 btn-outline-info">sửa</button>
//                         <button className="btn mx-3 btn-outline-danger">xóa</button>
//                     </td>
//                 </tr>
//             })}
//         </>

//         // cách viết 1
//         // <>
//         //     {renderPhim()}
//         // </>
//     )
// }

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
                    <td scope="row">{post.maPhim}</td>
                    <td>{post.tenPhim}</td>
                    <td><img src={post.hinhAnh} style={{ width: 50, height: 50 }} /></td>
                    <td>{post.moTa}</td>
                    <td>{post.maNhom}</td>
                    <td>{post.ngayKhoiChieu}</td>
                    <td className="d-flex text-center justify-content-center">
                        <button className="btn mx-3 btn-outline-success">them</button>
                        <button className="btn mx-3 btn-outline-info">sửa</button>
                        <button className="btn mx-3 btn-outline-danger">xóa</button>
                    </td>
                </tr>

            ))}

        </>
    )
}

export default Film

