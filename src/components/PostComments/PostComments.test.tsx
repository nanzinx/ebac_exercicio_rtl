import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

const comments = [
    { id: 1, comment: "Bala demais fi" },
    { id: 2, comment: "Forte" }
];

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Must add two comments', () => {
        render(<PostComment />);
    for (let i = 0; i < comments.length; i++) {
        const textArea = screen.getByRole('textbox');
        fireEvent.change(textArea, { target: { value: comments[i].comment } });
        fireEvent.click(screen.getByTestId('btn-add-comment'));
    }
        const renderedComments = screen.getAllByRole('listitem'); 

    expect(renderedComments).toHaveLength(comments.length);
    });
});