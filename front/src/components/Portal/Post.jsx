import React from 'react'

function Post({ handleAddLike }) {
    return (
        <div className="post">
            <div className="post-header">
                <img width={50} src="https://www.meram.bel.tr/assets/img/svg/meramBel.svg" alt="" />
                <div className="post-header-info">
                    <h6>Genç Meram</h6>
                </div>
            </div>
            <div className='image'>
                <img src="https://www.meram.bel.tr/upload/medya/MRM_4707.jpg" alt="" />
            </div>
            <div className='post-interactions'>
                <div className="post-interactions-left">
                    <i onClick={handleAddLike} class="fa-regular fa-heart" style={{ color: "red" }}></i>
                    <i className="fas fa-comment" style={{ color: "white" }}></i>
                </div>
            </div>
            <div className="post-content">
                <p>Sizleri Kafe Meram'a bekliyoruz!</p>
            </div>
        </div>
    )
}

export default Post