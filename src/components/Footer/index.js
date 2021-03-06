import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Kontakt")}</S.Language>
                <S.Large to="/">{t("")}</S.Large>
                <S.Para>
                  {t(
                    `Ukoliko imate bilo kakvih pitanja kontaktirajte nas.`
                  )}
                </S.Para>
                <a href="whoami@gmail.com">
                  <S.Chat>{t(`Kontakt`)}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Uslovi Korištenja")}</S.Title>
                <S.Large to="/" left="true">
                  {t("Sigurnost")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Upute za korištenje")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
               
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Empty />
                <S.Language>{t("Adresa")}</S.Language>
      
                <S.Para>Sarajevo</S.Para>
                <S.Para>@whoami Tim</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Kompanija")}</S.Title>
                <S.Large left="true" to="/">
                  {t("O nama")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Blog")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Naša misija")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://twitter.com/"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://instagram.com/"
                  src="instagram.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
