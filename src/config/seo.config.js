const SITE_NAME = 'BB Best Bank | Vanilla JS'

export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}
