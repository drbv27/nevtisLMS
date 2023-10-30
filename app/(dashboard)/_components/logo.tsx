import Image from 'next/image';

export const Logo = () => {
    return(
        <Image
            height={25}
            width={130}
            alt="Logo"
            src="/logo2.png"
        />
    )
}