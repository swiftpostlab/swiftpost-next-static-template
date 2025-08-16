import { useStaticTheme } from '@/styles/useStaticTheme';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import ContentFittedStack, {
  ContentFittedStackProps,
} from '@swiftpost/elysium/ui/ContentFittedStack';
import Logo from './Logo';
import Menu from './Menu';

interface Props {
  contentMaxWidth: ContentFittedStackProps['contentMaxWidth'];
}

const Header: React.FC<Props> = ({ contentMaxWidth }) => {
  const theme = useStaticTheme();
  return (
    <ContentFittedStack
      component="header"
      id="header"
      height={theme.spacing(12)}
      direction="row"
      alignItems="center"
      contentMaxWidth={contentMaxWidth}
      slotProps={{ container: { padding: theme.spacing(2) } }}
    >
      <Stack flex={1}>
        <Logo />
      </Stack>
      <Menu />
    </ContentFittedStack>
  );
};

export type HeaderProps = Props;
export default Header;
