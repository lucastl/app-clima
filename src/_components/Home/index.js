import React from 'react'
import ResultsList from '../../_components/ResultsList';
import { Box } from '@material-ui/core';
import './style.css';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    EmailIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

const Home = ({ result, favorites, setFavorites, search }) => {
    return (
        <>
            {
                Object.entries(result).length ?
                    <>
                        <ResultsList
                            title={'Resultados'}
                            result={result}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                        <Box
                            component="aside"
                            className="shared-buttons-wrap"
                        >
                            <FacebookShareButton
                                url={search ? `https://${window.location.host}/compartir?${search.join()}` : null}
                            >
                                <FacebookIcon size={42} round />
                            </FacebookShareButton>
                            <LinkedinShareButton
                                url={search ? `https://${window.location.host}/compartir?${search.join()}` : null}
                            >
                                <LinkedinIcon size={42} round />
                            </LinkedinShareButton>
                            <TwitterShareButton
                                url={search ? `https://${window.location.host}/compartir?${search.join()}` : null}
                            >
                                <TwitterIcon size={42} round />
                            </TwitterShareButton>
                            <WhatsappShareButton
                                url={search ? `https://${window.location.host}/compartir?${search.join()}` : null}
                            >
                                <WhatsappIcon size={42} round />
                            </WhatsappShareButton>
                            <EmailShareButton
                                url={search ? `https://${window.location.host}/compartir?${search.join()}` : null}
                            >
                                <EmailIcon size={42} round />
                            </EmailShareButton>
                        </Box>
                    </>
                    :
                    <p
                        className="no-search"
                    >
                        Realiza una consulta para obtener resultados...
                    </p>
            }
        </>
    );
}

export default Home;