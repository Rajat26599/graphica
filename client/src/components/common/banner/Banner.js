import { useEffect, useState } from "react"
import { Button } from "../button/Button"
import { BannerWrapper, Tagline, Subtagline, ButtonArea, ImageWrapper, BannerContent, BlobContainer, Blob, BannerMain } from "./styles"

export const Banner = (props) => {
    const [ bannerHeight, setBannerHeight ] = useState('')

    const blobData = [
        {
            background: '#ccf6c8',
            height: '200',
            width: '200',
            left: '10',
            top: '10',
            animation: 'movement_two',
            time: 18
        },
        {
            background: '#e8d5fd',
            height: '200',
            width: '200',
            left: '1000',
            top: '30',
            animation: 'movement_two',
            time: 21
        },
        {
            background: '#bce1f1',
            height: '160',
            width: '160',
            left: '500',
            top: '60',
            animation: 'movement_one',
            time: 12
        },
        {
            background: '#cdefe7',
            height: '120',
            width: '120',
            left: '480',
            top: '250',
            animation: 'movement_one',
            time: 16
        },
        {
            background: '#ffcef5',
            height: '100',
            width: '100',
            left: '150',
            top: '400',
            animation: 'movement_two',
            time: 7
        },
        {
            background: '#cdefe7',
            height: '120',
            width: '120',
            left: '480',
            top: '250',
            animation: 'movement_one',
            time: 16
        },
        {
            background: '#e8d5fd',
            height: '130',
            width: '130',
            left: '400',
            top: '400',
            animation: 'movement_two',
            time: 12
        },
        {
            background: '#ffe083',
            height: '130',
            width: '130',
            left: '280',
            top: '90',
            animation: 'movement_two',
            time: 13
        },
        {
            background: '#fdffbc',
            height: '130',
            width: '130',
            left: '700',
            top: '400',
            animation: 'movement_two',
            time: 16
        },
        {
            background: '#cdefe7',
            height: '120',
            width: '120',
            left: '920',
            top: '400',
            animation: 'movement_one',
            time: 11
        },
        {
            background: '#fdcedf',
            height: '160',
            width: '160',
            left: '750',
            top: '20',
            animation: 'movement_one',
            time: 10
        },
    ]

    const getBannerHeight = () => {
        const homeBanner = document.querySelector('#home-banner');
        return homeBanner?.offsetHeight;
    }
    useEffect(() => {
        setBannerHeight(getBannerHeight());
    })

    return (
        <BannerWrapper backgroundColor={props.backgroundColor} id={props.id}>
            <BlobContainer bannerHeight={bannerHeight}>
                {
                    blobData.map((item, index) => (
                        <Blob key={index} {...item}></Blob>
                    ))
                }
            </BlobContainer>
            <BannerMain>
                <BannerContent>
                    <Tagline>
                        {props.taglineLineOne} <br /> {props.taglineLineTwoPartOne} <span style={{color:`${props.taglineLineTwoPartTwoColor}`}}>{props.taglineLineTwoPartTwo}</span>
                    </Tagline>
                    <Subtagline>
                        {props.subtagline}
                    </Subtagline>
                    <ButtonArea>
                        <Button btnText={props.btnText} onClick={props.onClick}></Button>
                    </ButtonArea>
                    {props.children}
                </BannerContent>
                <ImageWrapper 
                    width={props.bannerImageWidth} 
                    src={props.bannerImage} 
                    alt="Banner image"
                    ></ImageWrapper>
            </BannerMain>
        </BannerWrapper>
    )
}