import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
import styles from "./styles";

class IdiomsAndProverbs extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text style={{color:"white", fontWeight: "bold", fontSize: 20, marginLeft: -75}}>Thành ngữ tục ngữ</Text>
          </Body>
        </Header>

        <Content padder>
            <Text>
            1. Thành ngữ tục ngữ
            - Better safe than sorry: Cẩn tắc vô áy náy
            - Money is the good servant but a bad master: Khôn lấy của che thân, dại lấy thân che của.
            - The grass are allways green on the other side of the fence: Đứng núi này trông núi nọ.
            - One bitten, twice shy: Chim phải đạn sợ cành cong.
            - Honesty is the best policy: Thật thà là thượng sách.
            - A woman gives and forgives, a man gets and forgets: Đàn bà cho và tha thứ, đàn ông nhận và quên.
            - No roses without a thorn: Hồng nào mà chả có gai, việc nào mà chả có vài khó khăn.
            - It nerver rains but it pours: Làm khi lành, để dành khi đau.
            - Its an ill bird that fouls its own nest: Vạch áo cho người xem lưng/Tốt đẹp phô ra, xấu xa đậy lại.
            - Dont trouble trouble till trouble troubles you: Tránh voi chẳng xấu mặt nào.
            - Still water run deep: Tẩm ngẩm tầm ngầm mà đánh chết voi.
            - Man make house, woman make home: Đàn ông xây nhà, đàn bà xây tổ ấm.
            - East of west - home is best: Ta về ta tắm ao ta.
            - Many a litte makes a mickle: Kiến tha lâu cũng đầy tổ.
            - Penny wise pound foolish: Tham bát bỏ mâm
            - Money make the mare go: Có tiền mua tiên cũng được.
            - Like father, like son: Con nhà tông không giống lông thì cũng giống cánh.
            - The die is cast: Bút sa gà chết.
            - Love is blind: Tình yêu mù quáng.
            - So far so good: Mọi thứ vẫn tốt đẹp.
            </Text>
        </Content>
      </Container>
    );
  }
}

export default IdiomsAndProverbs;

