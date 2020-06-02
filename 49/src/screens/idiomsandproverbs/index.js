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
            1. Thành ngữ tục ngữ{'\n'}
            - <b>Better safe than sorry</b>: Cẩn tắc vô áy náy{'\n'}
            - <b>Money is the good servant but a bad master</b>: Khôn lấy của che thân, dại lấy thân che của.{'\n'}
            - <b>The grass are allways green on the other side of the fence</b>: Đứng núi này trông núi nọ.{'\n'}
            - <b>One bitten, twice shy</b>: Chim phải đạn sợ cành cong.{'\n'}
            - <b>Honesty is the best policy</b>: Thật thà là thượng sách.{'\n'}
            - <b>A woman gives and forgives, a man gets and forgets</b>: Đàn bà cho và tha thứ, đàn ông nhận và quên.{'\n'}
            - <b>No roses without a thorn</b>: Hồng nào mà chả có gai, việc nào mà chả có vài khó khăn.{'\n'}
            - <b>It nerver rains but it pours</b>: Làm khi lành, để dành khi đau.{'\n'}
            - <b>Its an ill bird that fouls its own nest</b>: Vạch áo cho người xem lưng/Tốt đẹp phô ra, xấu xa đậy lại.{'\n'}
            - <b>Dont trouble trouble till trouble troubles you</b>: Tránh voi chẳng xấu mặt nào.{'\n'}
            - <b>Still water run deep</b>: Tẩm ngẩm tầm ngầm mà đánh chết voi.{'\n'}
            - <b>Man make house, woman make home</b>: Đàn ông xây nhà, đàn bà xây tổ ấm.{'\n'}
            - <b>East of west - home is best</b>: Ta về ta tắm ao ta.{'\n'}
            - <b>Many a litte makes a mickle</b>: Kiến tha lâu cũng đầy tổ.{'\n'}
            - <b>Penny wise pound foolish</b>: Tham bát bỏ mâm{'\n'}
            - <b>Money make the mare go</b>: Có tiền mua tiên cũng được.{'\n'}
            - <b>Like father, like son</b>: Con nhà tông không giống lông thì cũng giống cánh.{'\n'}
            - <b>The die is cast</b>: Bút sa gà chết.{'\n'}
            - <b>Love is blind</b>: Tình yêu mù quáng.{'\n'}
            - <b>So far so good</b>: Mọi thứ vẫn tốt đẹp.
            </Text>
        </Content>
      </Container>
    );
  }
}

export default IdiomsAndProverbs;

